﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Da
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// План закупок.
    /// </summary>
    // *** Start programmer edit section *** (ПланЗакупок CustomAttributes)

    // *** End programmer edit section *** (ПланЗакупок CustomAttributes)
    [AutoAltered()]
    [Caption("План закупок")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПланЗакупокE", new string[] {
            "ДатаНачала as \'Дата начала\'",
            "Организации.Организация as \'Организация\'",
            "Склады.Склад as \'Склад\'"})]
    [AssociatedDetailViewAttribute("ПланЗакупокE", "План", "ПланE", true, "", "План", true, new string[] {
            ""})]
    [View("ПланЗакупокL", new string[] {
            "ДатаНачала as \'Дата начала\'"})]
    public class ПланЗакупок : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДатаНачала = System.DateTime.Now;
        
        private IIS.Da.Склады fСклады;
        
        private IIS.Da.Организации fОрганизации;
        
        private IIS.Da.DetailArrayOfПлан fПлан;
        
        // *** Start programmer edit section *** (ПланЗакупок CustomMembers)

        // *** End programmer edit section *** (ПланЗакупок CustomMembers)

        
        /// <summary>
        /// ДатаНачала.
        /// </summary>
        // *** Start programmer edit section *** (ПланЗакупок.ДатаНачала CustomAttributes)

        // *** End programmer edit section *** (ПланЗакупок.ДатаНачала CustomAttributes)
        public virtual System.DateTime ДатаНачала
        {
            get
            {
                // *** Start programmer edit section *** (ПланЗакупок.ДатаНачала Get start)

                // *** End programmer edit section *** (ПланЗакупок.ДатаНачала Get start)
                System.DateTime result = this.fДатаНачала;
                // *** Start programmer edit section *** (ПланЗакупок.ДатаНачала Get end)

                // *** End programmer edit section *** (ПланЗакупок.ДатаНачала Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПланЗакупок.ДатаНачала Set start)

                // *** End programmer edit section *** (ПланЗакупок.ДатаНачала Set start)
                this.fДатаНачала = value;
                // *** Start programmer edit section *** (ПланЗакупок.ДатаНачала Set end)

                // *** End programmer edit section *** (ПланЗакупок.ДатаНачала Set end)
            }
        }
        
        /// <summary>
        /// План закупок.
        /// </summary>
        // *** Start programmer edit section *** (ПланЗакупок.Организации CustomAttributes)

        // *** End programmer edit section *** (ПланЗакупок.Организации CustomAttributes)
        [PropertyStorage(new string[] {
                "Организации"})]
        [NotNull()]
        public virtual IIS.Da.Организации Организации
        {
            get
            {
                // *** Start programmer edit section *** (ПланЗакупок.Организации Get start)

                // *** End programmer edit section *** (ПланЗакупок.Организации Get start)
                IIS.Da.Организации result = this.fОрганизации;
                // *** Start programmer edit section *** (ПланЗакупок.Организации Get end)

                // *** End programmer edit section *** (ПланЗакупок.Организации Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПланЗакупок.Организации Set start)

                // *** End programmer edit section *** (ПланЗакупок.Организации Set start)
                this.fОрганизации = value;
                // *** Start programmer edit section *** (ПланЗакупок.Организации Set end)

                // *** End programmer edit section *** (ПланЗакупок.Организации Set end)
            }
        }
        
        /// <summary>
        /// План закупок.
        /// </summary>
        // *** Start programmer edit section *** (ПланЗакупок.Склады CustomAttributes)

        // *** End programmer edit section *** (ПланЗакупок.Склады CustomAttributes)
        [PropertyStorage(new string[] {
                "Склады"})]
        [NotNull()]
        public virtual IIS.Da.Склады Склады
        {
            get
            {
                // *** Start programmer edit section *** (ПланЗакупок.Склады Get start)

                // *** End programmer edit section *** (ПланЗакупок.Склады Get start)
                IIS.Da.Склады result = this.fСклады;
                // *** Start programmer edit section *** (ПланЗакупок.Склады Get end)

                // *** End programmer edit section *** (ПланЗакупок.Склады Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПланЗакупок.Склады Set start)

                // *** End programmer edit section *** (ПланЗакупок.Склады Set start)
                this.fСклады = value;
                // *** Start programmer edit section *** (ПланЗакупок.Склады Set end)

                // *** End programmer edit section *** (ПланЗакупок.Склады Set end)
            }
        }
        
        /// <summary>
        /// План закупок.
        /// </summary>
        // *** Start programmer edit section *** (ПланЗакупок.План CustomAttributes)

        // *** End programmer edit section *** (ПланЗакупок.План CustomAttributes)
        public virtual IIS.Da.DetailArrayOfПлан План
        {
            get
            {
                // *** Start programmer edit section *** (ПланЗакупок.План Get start)

                // *** End programmer edit section *** (ПланЗакупок.План Get start)
                if ((this.fПлан == null))
                {
                    this.fПлан = new IIS.Da.DetailArrayOfПлан(this);
                }
                IIS.Da.DetailArrayOfПлан result = this.fПлан;
                // *** Start programmer edit section *** (ПланЗакупок.План Get end)

                // *** End programmer edit section *** (ПланЗакупок.План Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПланЗакупок.План Set start)

                // *** End programmer edit section *** (ПланЗакупок.План Set start)
                this.fПлан = value;
                // *** Start programmer edit section *** (ПланЗакупок.План Set end)

                // *** End programmer edit section *** (ПланЗакупок.План Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПланЗакупокE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПланЗакупокE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПланЗакупокE", typeof(IIS.Da.ПланЗакупок));
                }
            }
            
            /// <summary>
            /// "ПланЗакупокL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПланЗакупокL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПланЗакупокL", typeof(IIS.Da.ПланЗакупок));
                }
            }
        }
    }
}
